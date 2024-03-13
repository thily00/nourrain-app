import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, FlatList, Text, VStack, ScrollView, Pressable, ImageBackground } from "@gluestack-ui/themed";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useGLobalStore from "@/store";
import { me } from "@/services/user";
import { Nourrain } from "@/types/app";

type Props = NativeStackScreenProps<any>;
const HomeScreen = ({ navigation }: Props): React.JSX.Element => {
  const { signOut, setUserData } = useGLobalStore();
  const user = useGLobalStore((state) => state?.user);
  const createdNourrains = useGLobalStore((state) => state?.createNourrains);
  const joinedNourrains = useGLobalStore((state) => state?.joinedNourrains);

  const getInfo = async () => {
    const response = await me();
    const data = response.data;
    setUserData(data.user, data.createdNourrains, data.joinedNourrains);
  };

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      getInfo(); 
    });
  }, [user, createdNourrains, joinedNourrains]);

  React.useEffect(() => {
    getInfo();
  }, []);

  const goToNourrainScreen = (id: number) => {
    navigation.navigate("Nourrain", { id });
  };
  const goToShop = () => {
    navigation.navigate("Shop");
  };

  const goToCreateNourrain = () => {
    navigation.navigate("CreateNourrain");
  };
  const goToJoinNourrain = () => {
    console.log("rrrrr");
    navigation.navigate("JoinNourrain");
  };
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" px="$4">
        <Text
          fontSize="$2xl"
          color="$black"
          pt="$4"
          my="$8"
        >
          Bienvenue {user?.firstname}
        </Text>
        <Box bg="$primary500" h="$32" rounded="$md" mb="$4">
          <ImageBackground source={require('../../../assets/nourback.png')} 
            resizeMode="cover" w="$full" h="$full" imageStyle={{ borderRadius: 6 }}>
            <Text color="$primary500" fontSize="$md" bg="$primary50" w="$24" m="$3" p="$1" pl="$2" rounded="$full">
              Mon solde
            </Text>
            <Text color="$white" pt="$8" ml="$3" mb="$4" textAlign="left" fontSize="$4xl">
              {user?.wallet} $
            </Text>
          </ImageBackground>
        </Box>
        

        <BaseButton
          name="Acheter des Guirk"
          todo={goToShop}
          btnVariant="solid"
        />

        {createdNourrains && (
          <>
            <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
            Mes nourrains
            </Text>
            <FlatList 
              data={createdNourrains} 
              renderItem={({ item }: any) => (
                <Pressable key={item.id} bg="$primary50" rounded="$md" mb="$4" mr="$4" w="$32" h="$24" 
                  onPress={() => goToNourrainScreen(item.id)}>
                    <Box position="absolute" bottom="$1" left="$2">
                      <Text color="$black" pt="$4" textAlign="left" fontSize="$sm">
                        {item.name}
                      </Text>
                      <Text color="$black" textAlign="left" fontSize="$2xl">
                        {item.wallet} $
                      </Text>
                    </Box>
                </Pressable>
              )}
              keyExtractor={item => item.id}
              horizontal={true} 
            />
          </>
        )}

      
        {joinedNourrains && (
          <>
            <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
              Les nourrains que j’ai rejoint
            </Text>
            <FlatList 
              data={joinedNourrains} 
              renderItem={({ item }: any) => (
                <Pressable key={item.id} bg="$primary50" rounded="$md" mb="$4" mr="$4" w="$32" h="$24"
                  onPress={() => goToNourrainScreen(item.id)}>
                  <Box position="absolute" bottom="$1" left="$2">
                    <Text color="$black" pt="$4" textAlign="left" fontSize="$sm">
                      {item.name}
                    </Text>
                    <Text color="$black" textAlign="left" fontSize="$2xl">
                      {item.wallet} $
                    </Text>
                  </Box>
                </Pressable>
              )}
              keyExtractor={item => item.id}
              horizontal={true} 
            />
          </>
        )}

        <Text color="$black" fontSize="$xl" mb="$4">
          Accéder à plus de nourrain
        </Text>
        <VStack gap="$4" width="$full">
          <BaseButton
            name="Créer un nourrain"
            todo={goToCreateNourrain}
            btnVariant="solid"
          />
          <BaseButton
            name="Rejoindre un nourrain"
            todo={goToJoinNourrain}
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
