import sql from "@/app/api/utils/sql";

// GET - List enquiries
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const serviceType = searchParams.get('service_type');

    let query = 'SELECT * FROM enquiries WHERE 1=1';
    const params = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      query += ` AND status = $${paramCount}`;
      params.push(status);
    }

    if (serviceType) {
      paramCount++;
      query += ` AND service_type = $${paramCount}`;
      params.push(serviceType);
    }

    query += ' ORDER BY created_at DESC';

    const enquiries = await sql(query, params);
    
    return Response.json({ success: true, data: enquiries });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return Response.json({ success: false, error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}

// POST - Create new enquiry
export async function POST(request) {
  try {
    const { name, email, phone, service_type, message } = await request.json();

    if (!name || !phone || !message) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO enquiries (name, email, phone, service_type, message)
      VALUES (${name}, ${email}, ${phone}, ${service_type}, ${message})
      RETURNING *
    `;

    return Response.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return Response.json({ success: false, error: 'Failed to create enquiry' }, { status: 500 });
  }
}


