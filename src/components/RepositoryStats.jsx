import { View } from "react-native";
import StyledText from "./StyledText";
import { parseThousands } from "../utils/parseThousands";

const RepositoryStats = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
      }}
    >
      <View>
        <StyledText align="center" fontSize="subheading" fontWeight="bold">
          {parseThousands(props.ratingAverage)}
        </StyledText>
        <StyledText fontSize="subheading">Rating</StyledText>
      </View>
      <View>
        <StyledText align="center" fontSize="subheading" fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </StyledText>
        <StyledText fontSize="subheading">Stars</StyledText>
      </View>
      <View>
        <StyledText align="center" fontSize="subheading" fontWeight="bold">
          {parseThousands(props.reviewCount)}
        </StyledText>
        <StyledText fontSize="subheading">Review</StyledText>
      </View>
      <View>
        <StyledText align="center" fontSize="subheading" fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText fontSize="subheading">Forks</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
