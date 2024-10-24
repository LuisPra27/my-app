import React from "react";
import { FlatList, View, Text } from "react-native";
import repositories from "../data/repositories";

const RepositoryList = () => {
    return(
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => (
             <View key={repo.id}>
             <Text> id:{repo.id}</Text>
             <Text> FullName:{repo.fullName}</Text>
             <Text> Description: {repo.description}</Text>
             <Text> Languaje: {repo.language}</Text>
             <Text> Stars: {repo.stargazersCount}</Text>
             <Text> Forks: {repo.forksCount}</Text>
             <Text> Review: {repo.reviewCount}</Text>
             <Text> Rating: {repo.ratingAverage}</Text>
            </View>
        )}
        />
    )
}

export default RepositoryList
