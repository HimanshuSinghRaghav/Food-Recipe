import React from "react";
import Cook from "./cook.png"
const AboutMe = () => {
  return (
    <div>
      <p className="text-3xl tracking-wide text-center p-2 font-bold">
        Welcome to FoodSu Recipes!
      </p>
      <div className="w-full flex justify-center items-center">
      <img className=" flex justify-center items-center" src={Cook} alt=""/>
      </div>
      <div className="px-8 sm:px-40 py-4 text-xl">
        <p className=" tracking-wide text-justify">
          I'm Himanshu Raghav, a passionate food lover and culinary enthusiast.
          I created this website with the aim of sharing my love for cooking and
          exploring delicious recipes from around the world. Here, you'll find a
          treasure trove of mouthwatering dishes, cooking tips, and culinary
          inspiration that will tantalize your taste buds and ignite your
          culinary creativity. Growing up, I was fortunate to be exposed to
          diverse cuisines and flavors from my multicultural background. These
          culinary experiences ignited a deep curiosity within me to learn more
          about different cooking techniques, ingredients, and cultural
          traditions. I embarked on a culinary journey, constantly experimenting
          in my own kitchen, and exploring the world of flavors one recipe at a
          time. Through FoodSu Recipes!, I want to take you on this gastronomic
          adventure with me. Whether you're a seasoned home cook or a complete
          novice in the kitchen, there's something for everyone here. From quick
          and easy weeknight meals to elaborate gourmet delights, I strive to
          provide recipes that are not only delicious but also accessible, with
          step-by-step instructions that are easy to follow. I believe that
          cooking is not just about nourishing our bodies; it's an art form that
          brings people together. Food has a unique ability to create
          connections, foster traditions, and evoke cherished memories. It's my
          hope that the recipes you discover on this website will inspire you to
          gather your loved ones around the table, create lasting memories, and
          share the joy of good food. In addition to the recipes, you'll also
          find helpful cooking tips, ingredient substitutions, and suggestions
          for adapting recipes to suit various dietary preferences. Whether
          you're looking for vegetarian, vegan, gluten-free, or allergy-friendly
          options, I've got you covered. I strongly believe that everyone should
          be able to enjoy the pleasures of cooking and eating, regardless of
          their dietary restrictions. I'm dedicated to continuously expanding
          the collection of recipes on FoodSu Recipes!. I'm always on the
          lookout for new and exciting flavors to share with you. So, be sure to
          check back regularly and subscribe to our newsletter to stay updated
          on the latest culinary creations. Thank you for joining me on this
          culinary journey. I hope that FoodSu Recipes! becomes your go-to
          resource for delicious recipes, culinary inspiration, and a community
          of food enthusiasts. Feel free to reach out to me with any questions,
          suggestions, or even your own favorite recipes. Together, let's
          celebrate the joy of cooking and savor the flavors of life!
        </p>
        <div className="py-5">
          <p>Happy cooking!</p>
          <p>Himanshu Raghav</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
