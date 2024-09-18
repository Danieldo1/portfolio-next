
import Project from "@/models/projectModals";
import dbConnect from "@/utils/connectDB";
import { NextResponse } from "next/server";


export async function GET() {
    await dbConnect();
  
    try {
      const projects = await Project.find({});
      return NextResponse.json({ projects }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
  }