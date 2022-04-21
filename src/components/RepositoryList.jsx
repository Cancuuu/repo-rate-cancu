import repositories from "../data/repositories";
import { Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  );
};

export default RepositoryList;
