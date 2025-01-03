import { NextResponse } from 'next/server'
import { Pool } from 'pg'

// Create a new pool for PostgreSQL connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(request: Request) {
  const data = await request.json()
  
  try {
    // Insert the form data into the database
    const result = await pool.query(
      'INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3) RETURNING id',
      [data.name, data.email, data.message]
    )

    return NextResponse.json({ message: 'Form submitted successfully', id: result.rows[0].id })
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 })
  }
}

