import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, password } = body;

    // Mock user data for validation
    const mockUser = {
      email: "test@example.com",
      password: "password123",
    };

    // Validate user credentials
    if (email === mockUser.email && password === mockUser.password) {
      return NextResponse.json(
        {
          success: true,
          message: "Login successful!",
          user: {
            id: 1,
            name: "John Doe",
            email: mockUser.email,
          },
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing the request.",
      },
      { status: 500 }
    );
  }
}