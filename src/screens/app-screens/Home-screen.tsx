import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView, Pressable } from "@gluestack-ui/themed";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useGLobalStore from "@/store";
import { me } from "@/services/user";

type Props = NativeStackScreenProps<any>;
const HomeScreen = ({ navigation }: Props): React.JSX.Element => {
  const { signOut, setUser, setCreateNourrains, setJoinedNourrains } = useGLobalStore();
  const user = useGLobalStore((state) => state?.user);
  const createdNourrains = useGLobalStore((state) => state?.createNourrains);
  const joinedNourrains = useGLobalStore((state) => state?.joinedNourrains);

  const getInfo = async () => {
    const response = await me();
    setUser(response.data.user);
    setCreateNourrains(response.data.createNourrains);
    setJoinedNourrains(response.data.joinedNourrains);
  };

  React.useEffect(() => {
    getInfo();
  }, []);

  const goToNourrainScreen = (id: number) => {
    navigation.navigate("Nourrain", { id });
  };
  const goToShop = () => {
    navigation.navigate("Shop");
  };

  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" px="$4">
        <Text
          fontSize="$2xl"
          color="$black"
          mt="$10"
          mb="$12"
          textAlign="center"
        >
          Bienvenue {user?.firstname}
        </Text>
        <Text color="$black" fontSize="$xl">
          Mon solde
        </Text>
        <Text color="$black" pt="$8" mb="$4" textAlign="center" fontSize="$4xl">
          {user?.wallet} $
        </Text>

        <BaseButton
          name="Acheter des Guirk"
          todo={goToShop}
          btnVariant="solid"
        />

        {createdNourrains && createdNourrains.map((nourrain) => (
          <>
            <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
            Mes nourrains
            </Text>
            <Pressable key={nourrain.id} bg="$grey" rounded="$md" mb="$4" px="$4" 
              onPress={() =>  goToNourrainScreen(nourrain.id)}>
              <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
                {nourrain.wallet} $
              </Text>
              <Text color="$black" p="$4" textAlign="center">
                {nourrain.name}
              </Text>
            </Pressable>
          </>
        ))}

      
        {joinedNourrains && joinedNourrains.map((nourrain) => (
          <>
            <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
              Les nourrains que j’ai rejoint
            </Text>
            <Pressable key={nourrain.id} bg="$grey" rounded="$md" mb="$4" px="$4" 
              onPress={() => goToNourrainScreen(nourrain.id)}>
              <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
                {nourrain.wallet} $
              </Text>
              <Text color="$black" p="$4" textAlign="center">
                {nourrain.name}
              </Text>
            </Pressable>
          </>
        ))}

        <Text color="$black" fontSize="$xl" mb="$4">
          Accéder à plus de nourrain
        </Text>
        <VStack gap="$4" width="$full">
          <BaseButton
            name="Créer un nourrain"
            todo={() => console.log("test")}
            btnVariant="solid"
          />
          <BaseButton
            name="Rejoindre un nourrain"
            todo={() => console.log("test")}
            btnVariant="solid"
          />

          <BaseButton
            name="Se deconnecter"
            todo={signOut}
            btnVariant="solid"
            action="negative"
          />
        </VStack>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default HomeScreen;
