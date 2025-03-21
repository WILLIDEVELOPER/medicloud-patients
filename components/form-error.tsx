import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
    message?: string;
}

// a comment to show changes on server

export const FormError = ({ message }: FormErrorProps) => {
    if (!message)  return null;

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <BsExclamationTriangle className="h-4 w-4" />
            <span>{message}</span>
        </div>
    )
}