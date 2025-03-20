import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userModel";
import Settings from "@/app/models/settingModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { email, family_name, given_name, picture } = await request.json();

    const userExist = await User.findOne({ email });

    if (!!userExist) {
      const userSettings = await Settings.findOne({ email })
        return NextResponse.json({
            data: {
              user: userExist,
              userSettings
            },
            isSuccess: true,
            message: "Login successfull"
          });
    } else {
      const username = given_name.split(" ");
      const randomNumber = Math.floor(100000 + Math.random() * 9000);
      const given_username = `${username[0].toLowerCase()}${randomNumber}`;

      const user = await User.create({
        firstname: given_name,
        lastname: family_name,
        username: given_username,
        isGoogleModeRegistration: true,
        image_url: picture,
        email,
      });

      const userSettings = await Settings.create({
        userId: user._id,
        email
      })

      return NextResponse.json({
        data: {
          user,
          userSettings
        },
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
