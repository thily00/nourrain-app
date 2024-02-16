import { Toast, ToastTitle, ToastDescription } from "@gluestack-ui/themed"

type AppToastProps = {
    message: string;
    description: string;
    action: "error" | "success" | "warning" | "info";   
}
const AppToast = ({action, message, description}: AppToastProps) => {
  return (
    <Toast action={action} variant="accent">
        <ToastTitle>{message}</ToastTitle>
        <ToastDescription >{description}</ToastDescription>
    </Toast>
  )
}

export default AppToast
