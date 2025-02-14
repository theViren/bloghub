import Head from "next/head";
import BlogCard from "./component/Card";
import { Row, Container } from "react-bootstrap";
import CardTwo from "./component/CardTwo";
import CardThree from "./component/CardThree";
import CardFour from "./component/CardFour";
import ImageSlick from "./component/ImageSlick";
import HomeTitle from "./component/HomeTitle";

export default function Home() {
  return (
    <div className="main-body">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTitle />
      <BlogCard colProp="3" />
      <HomeTitle />

      <CardThree />
      <HomeTitle />

      <CardThree />
      <HomeTitle />

      <CardThree />
      <HomeTitle />

      <CardFour />
      <HomeTitle />

      <CardTwo />
      <HomeTitle />

      <ImageSlick />
    </div>
  );
}
