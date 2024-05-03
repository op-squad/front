import { LuAlertCircle } from "react-icons/lu";

import { Alert, AlertDescription, AlertTitle } from "@components/ui/Alert";

interface AlertDestructiveProps {
  title: string;
  description?: string;
}

export function AlertDestructive({
  title,
  description = "Registration failed. Please check your details and try again.",
}: AlertDestructiveProps) {
  return (
    <Alert variant="destructive">
      <LuAlertCircle />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
