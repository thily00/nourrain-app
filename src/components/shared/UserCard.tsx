import { Text, HStack, Pressable } from "@gluestack-ui/themed";
import { Crown, DoorOpen, UserRound } from "lucide-react-native";

const UserCard = () => {
  return (
    <HStack width="$full" bg="$secondary50" p="$4" rounded="$md" justifyContent="space-between">
        <HStack gap="$2" alignItems="center">
            <Pressable bg="$white" width="$10" height="$10" rounded="$full" alignItems="center" justifyContent="center">
            <UserRound size={20} color="black"/>
            </Pressable>
            <Text fontSize="$lg" fontWeight="$semibold" color="$black">Yann PICAUD</Text>
        </HStack>

        <HStack gap="$4" alignItems="center">
            <Pressable bg="$white" width="$10" height="$10" rounded="$full" alignItems="center" justifyContent="center">
            <Crown size={20} color="black"  />
            </Pressable>
            <Pressable bg="$white" width="$10" height="$10" rounded="$full" alignItems="center" justifyContent="center">
            <DoorOpen size={20} color="black" />
            </Pressable>
            
        </HStack>
    </HStack>
  )
}

export default UserCard