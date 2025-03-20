import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { email, family_name, given_name, picture } = await request.json();

    const userExist = await User.findOne({ email });

    if (!!userExist) {
        return NextResponse.json({
            data: userExist,
            isSuccess: true,
            message: "Login successfull"
          });
    } else {
      const username = given_name.split(" ");
      const randomNumber = Math.floor(100000 + Math.random() * 9000);
      const given_username = `${username[0].toLowerCase()}${randomNumber}`;

      const newUser = await User.create({
        firstname: given_name,
        lastname: family_name,
        username: given_username,
        isGoogleModeRegistration: true,
        image_url: picture,
        email,
      });

      return NextResponse.json({
        data: newUser,
        isSuccess: true,
        message: "Your account has been registered",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error,
      message: "Internal Server Error",
    });
  }
}
