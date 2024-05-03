import Button from "./ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";

export default function LoginDetailForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted with the following data:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Birthdate:", birthdate);
    console.log("Gender:", gender);
    console.log("Address:", address);
    // Reset form fields
    setFirstName("");
    setLastName("");
    setBirthdate("");
    setGender("");
    setAddress("");
  };
  return (
    <div className="flex h-fit outline-2 outline-red-500 flex-col items-center gap-12">
      <p className="font-extrabold text-primary font-Raleway text-4xl">
        Let's talk more about you!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mb-8 w-8/12"
      >
        <div className="flex gap-4 justify-between mb-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-light"
            >
              First Name
            </label>
            <Input
              type="text"
              id="firstname"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            ></Input>
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-xs font-light"
            >
              Last Name
            </label>
            <Input
              type="text"
              id="lastname"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            ></Input>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthdate"
            className="block text-xs font-light"
          >
            Birthdate
          </label>
          <Input
            type="text"
            id="birthdate"
            autoComplete="off"
            onChange={(e) => setBirthdate(e.target.value)}
            value={birthdate}
            required
          ></Input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-xs font-light"
          >
            Gender
          </label>
          <div className="relative mb-3 ">
            <Input
              type="text"
              id="gender"
              autoComplete="off"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
            ></Input>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-xs font-light"
          >
            Address
          </label>
          <div className="relative mb-8 ">
            <Input
              type="text"
              id="address"
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            ></Input>
          </div>
        </div>
        <Button
          variant="primary"
          typeof="submit"
          className="font-Raleway w-full"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
