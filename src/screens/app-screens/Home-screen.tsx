import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, FlatList, Text, VStack, ScrollView, Pressable, ImageBackground, HStack } from "@gluestack-ui/themed";
import React from "react";
import { Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useGLobalStore from "@/store";
import { me } from "@/services/user";
import { Settings } from "lucide-react-native";

type Props = NativeStackScreenProps<any>;
const HomeScreen = ({ navigation }: Props): React.JSX.Element => {
  const { signOut, setUserData } = useGLobalStore();
  const user = useGLobalStore((state) => state?.user);
  const createdNourrains = useGLobalStore((state) => state?.createNourrains);
  const joinedNourrains = useGLobalStore((state) => state?.joinedNourrains);

  const getInfo = async () => {
    await me()
      .then((res) => {
        const data = res.data;
        setUserData(data.user, data.createdNourrains, data.joinedNourrains);
      })
      .catch((err) => console.log(err));
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
    navigation.navigate("JoinNourrain");
  };
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" px="$4">
        <HStack justifyContent="space-between" alignItems="center" mt={Platform.OS === 'ios' ?  "$16" : "$8"} mb="$6">
          <Text fontSize="$2xl" color="$black" pt="$4">
            Bienvenue {user?.firstname}
          </Text>
          <Pressable onPress={signOut}>
            <Settings color="#0077E6" />
          </Pressable>
        </HStack>
        
        <Box bg="$primary500" h="$32" rounded="$md" mb="$4">
          <ImageBackground source={require('../../../assets/nourback.png')} 
            resizeMode="cover" w="$full" h="$full" imageStyle={{ borderRadius: 6 }}>
            <Text color="$primary500" fontSize="$md" bg="$primary50" w="$24" m="$3" p="$1" pl="$2" rounded="$full">
              Mon solde
            </Text>
            <Text color="$white" pt="$8" ml="$3" mb="$4" textAlign="left" fontSize="$4xl" fontWeight="$bold">
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
            <Text color="$black" fontSize="$xl" mt="$8" mb="$2" fontWeight="$light">
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
                      <Text color="$black" pt="$0" textAlign="left" fontSize="$xl" fontWeight="$bold">
                        {item.wallet} $
                      </Text>
                    </Box>
                </Pressable>
              )}
              keyExtractor={(item:any) => item.id}
              horizontal={true} 
            />
          </>
        )}

      
        {joinedNourrains && (
          <>
            <Text color="$black" fontSize="$xl" mt="$4" mb="$2" fontWeight="$light">
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
                    <Text color="$black" pt="$0" textAlign="left" fontSize="$xl" fontWeight="$bold">
                      {item.wallet} $
                    </Text>
                  </Box>
                </Pressable>
              )}
              keyExtractor={(item:any) => item.id}
              horizontal={true} 
            />
          </>
        )}

        <Text color="$black" fontSize="$xl" mt="$4" mb="$4" fontWeight="$light">
          Accéder à plus de nourrain
        </Text>
        <VStack gap="$4" width="$full">
          <BaseButton
            name="Créer un nourrain"
            todo={goToCreateNourrain}
            btnVariant="solid"
          />
          <BaseButton
            name="Rejoindre "
            todo={goToJoinNourrain}
            btnVariant="solid"
          />
        </VStack>

          {/* <BaseButton
            name="Se deconnecter"
            todo={signOut}
            btnVariant="solid"
            action="negative"
          /> */}
        {/* </HStack> */}
      </ScrollView>
    </CustomSafeArea>
  );
};

export default HomeScreen;
