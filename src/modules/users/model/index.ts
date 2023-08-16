import mongoose from "mongoose";

export interface IUser {
  id: string;
  recommend?: string[];
}

const UserSchema = new mongoose.Schema<IUser>({
  id: String,
  recommend: [String],
});

const User = mongoose.model("users", UserSchema);

export { User };
