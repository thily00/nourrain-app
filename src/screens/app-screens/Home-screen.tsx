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
<<<<<<< HEAD
  const { signOut, setUserData } = useGLobalStore();
=======
  const { signOut, setUser, setCreateNourrains, setJoinedNourrains } =
    useGLobalStore();
>>>>>>> 539f2828628227d7658a01f09d1e9ec9e28c7df5
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
        <Box bg="$primary500" rounded="$md" mb="$4">
          <Text color="$primary500" fontSize="$md" bg="$primary50" w="$24" m="$3" p="$1" rounded="$full">
            Mon solde
          </Text>
          <Text color="$black" pt="$8" mb="$4" textAlign="center" fontSize="$4xl">
            {user?.wallet} $
          </Text>
        </Box>
        

        <BaseButton
          name="Acheter des Guirk"
          todo={goToShop}
          btnVariant="solid"
        />

<<<<<<< HEAD
        {createdNourrains && (
          <>
            <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
            Mes nourrains
            </Text>
            <FlatList 
              data={createdNourrains} 
              renderItem={({ item }: any) => (
                <Pressable key={item.id} bg="$primary50" rounded="$md" mb="$4" mr="$4" w="$32" h="$24" 
                  onPress={() =>  goToNourrainScreen(item.id)}>
                    <ImageBackground source={require('../../../assets/nourback.png')} 
                      resizeMode="cover" w="$full" h="$full" rounded="$md" imageStyle={{ borderRadius: 10 }}>
                        <Box position="absolute" bottom="$1" left="$2">
                          <Text color="$black" pt="$4" textAlign="left" fontSize="$sm">
                            {item.name}
                          </Text>
                          <Text color="$black"  textAlign="left" fontSize="$2xl">
                            {item.wallet} $
                          </Text>
                        </Box>
                    </ImageBackground>
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
              data={createdNourrains} 
              renderItem={({ item }: any) => (
                <Pressable key={item.id} bg="$grey" rounded="$md" mb="$4" px="$4" mr="$4" 
                  onPress={() =>  goToNourrainScreen(item.id)}>
                  <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
                    {item.wallet} $
                  </Text>
                  <Text color="$black" p="$4" textAlign="center">
                    {item.name}
                  </Text>
                </Pressable>
              )}
              keyExtractor={item => item.id}
              horizontal={true} 
            />
          </>
        )}
=======
        {createdNourrains &&
          createdNourrains.map((nourrain) => (
            <>
              <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
                Mes nourrains
              </Text>
              <Pressable
                key={nourrain.id}
                bg="$grey"
                rounded="$md"
                mb="$4"
                px="$4"
                onPress={() => goToNourrainScreen(nourrain.id)}
              >
                <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
                  {nourrain.wallet} $
                </Text>
                <Text color="$black" p="$4" textAlign="center">
                  {nourrain.name}
                </Text>
              </Pressable>
            </>
          ))}

        {joinedNourrains &&
          joinedNourrains.map((nourrain) => (
            <>
              <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
                Les nourrains que j’ai rejoint
              </Text>
              <Pressable
                key={nourrain.id}
                bg="$grey"
                rounded="$md"
                mb="$4"
                px="$4"
                onPress={() => goToNourrainScreen(nourrain.id)}
              >
                <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
                  {nourrain.wallet} $
                </Text>
                <Text color="$black" p="$4" textAlign="center">
                  {nourrain.name}
                </Text>
              </Pressable>
            </>
          ))}
>>>>>>> 539f2828628227d7658a01f09d1e9ec9e28c7df5

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
