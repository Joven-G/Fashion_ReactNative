import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Box, Header, Text, makeStyles, ScrollableContent } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Theme } from "../../components/Theme";
import Graph, { DataPoint } from "./Graph";
import Transaction from "./Transaction";

const startDate = new Date("09/01/2019").getTime();
const numberOfMonths = 6;

const graphData: DataPoint[] = [
  {
    id: 245674,
    date: new Date("10/01/2019").getTime(),
    value: 139.42,
    color: "primary",
  },
  {
    id: 245675,
    date: new Date("12/01/2019").getTime(),
    value: 281.23,
    color: "graph1",
  },
  {
    id: 245677,
    date: new Date("02/01/2020").getTime(),
    value: 198.54,
    color: "graph2",
  },
];

const footerHeight = Dimensions.get("window").width / 5.5;
const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();

  return (
    <ScrollableContent>
      <Box flex={1} backgroundColor="background">
        <Header
          title="Transaction History"
          left={{ icon: "arrow-left", onPress: () => navigation.openDrawer() }}
          right={{ icon: "share", onPress: () => true }}
        />
        <Box flex={1} padding="m">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Text variant="header" color="secondary" opacity={0.3}>
                TOTAL SPENT
              </Text>
              <Text variant="title1">$619.19</Text>
            </Box>
            <Box backgroundColor="primaryLight" borderRadius="l" padding="s">
              <Text color="primary">All Time</Text>
            </Box>
          </Box>
          <Graph
            data={graphData}
            startDate={startDate}
            numberOfMonths={numberOfMonths}
          />
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {graphData.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ScrollView>
        </Box>
      </Box>
    </ScrollableContent>
  );
};

export default TransactionHistory;
