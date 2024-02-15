import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView} from "@gluestack-ui/themed";
import TextInputField from "@/components/shared/TextInput";
import UserCard from "@/components/shared/UserCard";

const ManageScreen = (): React.JSX.Element => {
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        {/* <Text>Manager nourrain</Text> */}

        <TextInputField label='Nom du nourrain' placeholder='Entrez votre adresse email' type='text' value={"Team EduSign"} />
        <TextInputField 
          type='text' 
          multiline={true}
          nbOfLines={4} 
          value={"Le nourrain"}
          label='Description du nourrain' 
          placeholder='Entrez votre adresse email' />

        <VStack alignSelf='center' gap="$4" width="$full" mt="$4">
            <BaseButton name='Sauvegarder' todo={() => console.log('test')} btnVariant='solid'/>
            <BaseButton name="Cloturer" todo={() => console.log('test')} action="negative"/>
        </VStack>

        <Box>
          <Text fontSize="$lg" fontWeight="$semibold" color="$black" mt="$8" mb="$2">Membres en attente</Text>
          <VStack gap="$2">
            <UserCard />
            <UserCard />
          </VStack>
        </Box>

        <Box mt="$4">
          <Text fontSize="$lg" fontWeight="$semibold" color="$black" mt="$8" mb="$2">Membres</Text>
          <VStack gap="$2">
            <UserCard />
            <UserCard />
          </VStack>
        </Box>

      </ScrollView>
    </CustomSafeArea>
  );
};

export default ManageScreen;
