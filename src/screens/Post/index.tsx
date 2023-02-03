import { useRef, useState } from "react";
import { useWindowDimensions } from "react-native";
import { ScrollView, Text, View } from "react-native";

import { ProgressBar } from "../../components/ProgressBar";

import { styles } from "./styles";

interface ScrollProps {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
}

export function Post() {
  const [percentage, setPercentage] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const dimensions = useWindowDimensions();
  
  function scrollPercentage({ layoutMeasurement, contentOffset, contentSize }: ScrollProps) {
    const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100);
    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

    setPercentage(value < visibleContent ? 0 : value);
  }

  function handleScrollMoveTop() {
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Screen</Text>

      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 16 }}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
          sapiente, rem quasi similique non temporibus nulla libero commodi
          atque impedit ab ratione, fugit nesciunt delectus esse repellendus sit
          voluptatem!
        </Text>

        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
          sapiente, rem quasi similique non temporibus nulla libero commodi
          atque impedit ab ratione, fugit nesciunt delectus esse repellendus sit
          voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Beatae dolorem repudiandae, nemo est cupiditate alias temporibus, quo
          consectetur corrupti reiciendis, ipsam ipsa vel veniam quidem hic
          repellendus quia. Quia, labore!
        </Text>

        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
          sapiente, rem quasi similique non temporibus nulla libero commodi
          atque impedit ab ratione, fugit nesciunt delectus esse repellendus sit
          voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Beatae dolorem repudiandae, nemo est cupiditate alias temporibus, quo
          consectetur corrupti reiciendis, ipsam ipsa vel veniam quidem hic
          repellendus quia. Quia, labore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Est ab exercitationem ex sed id
          cupiditate voluptas odio magnam alias aperiam nobis nulla velit,
          facere minus sapiente voluptatibus ducimus? Corrupti, dolores.
        </Text>

        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
          sapiente, rem quasi similique non temporibus nulla libero commodi
          atque impedit ab ratione, fugit nesciunt delectus esse repellendus sit
          voluptatem!
        </Text>

        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
          sapiente, rem quasi similique non temporibus nulla libero commodi
          atque impedit ab ratione, fugit nesciunt delectus esse repellendus sit
          voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Beatae dolorem repudiandae, nemo est cupiditate alias temporibus, quo
          consectetur corrupti reiciendis, ipsam ipsa vel veniam quidem hic
          repellendus quia. Quia, labore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Est ab exercitationem ex sed id
          cupiditate voluptas odio magnam alias aperiam nobis nulla velit,
          facere minus sapiente voluptatibus ducimus? Corrupti, dolores.
        </Text>

        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
          sapiente, rem quasi similique non temporibus nulla libero commodi
          atque impedit ab ratione, fugit nesciunt delectus esse repellendus sit
          voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Beatae dolorem repudiandae, nemo est cupiditate alias temporibus, quo
          consectetur corrupti reiciendis, ipsam ipsa vel veniam quidem hic
          repellendus quia. Quia, labore!
        </Text>
      </ScrollView>

      <ProgressBar
        value={percentage}
        onMoveTop={handleScrollMoveTop}
      />
    </View>
  );
}
