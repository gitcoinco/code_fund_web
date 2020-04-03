import React from "react";
// import { Link } from "gatsby";

import logo from "../img/logos/codefund-by-gitcoin.svg";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Github from "./icons/Github";
import BackYourStack from "./icons/BackYourStack";
import FooterLinks from "../components/FooterLinks";
import { Box } from "./primitives/Box";
import { ButtonLink } from "./button/ButtonLink";
// import { Image } from "./primitives/Image";
import { Text } from "./primitives/Text";

export default class Footer extends React.Component {
  render() {
    return (
      <Box base="bg-white">
        <Box base="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
          <Box base="xl:grid xl:grid-cols-2 xl:gap-8">
            <Box base="grid grid-cols-2 gap-8 xl:col-span-2">
              <Box base="md:grid md:grid-cols-2 md:gap-8">
                <Box>
                  <FooterLinks
                    title="About"
                    links={[
                      { name: "Advertise with us", url: "#" },
                      { name: "Become a publisher", url: "#" },
                      { name: "Privacy Policy", url: "#" },
                      { name: "Cookie Policy", url: "#" },
                    ]}
                  />
                </Box>
                <Box base="mt-12 md:mt-0">
                  <FooterLinks
                    title="Company"
                    links={[
                      { name: "Blog", url: "#" },
                      { name: "Podcast Network", url: "#" },
                      { name: "Open Source", url: "#" },
                      { name: "Our Stack", url: "#" },
                    ]}
                  />
                </Box>
              </Box>
              <Box base="md:grid md:grid-cols-2 md:gap-8">
                <Box>
                  <FooterLinks
                    title="Resouces"
                    links={[
                      { name: "Sign In", url: "#" },
                      { name: "Media", url: "#" },
                      { name: "Status", url: "#" },
                      { name: "FAQ", url: "#" },
                    ]}
                  />
                </Box>
                <Box base="mt-12 md:mt-0">
                  <Box>
                    <Text
                      base="uppercase"
                      leading="5"
                      tracking="wider"
                      color="gray-400"
                      size="sm"
                      weight="semibold"
                    >
                      Subscribe to our newsletter
                    </Text>
                    <Box base="mt-3 rounded-md shadow">
                      <ButtonLink route="#" type="md-primary">
                        Subscribe
                      </ButtonLink>
                      {/* <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                        Subscribe
                      </button> */}
                    </Box>
                  </Box>
                  <Box base="mt-8">
                    {/* <Image type="display" src={logo} alt="CodeFund by GitCoin" /> */}
                    <BackYourStack />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box base="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <Box base="flex md:order-2">
              <Facebook />
              <Twitter classes="ml-6 text-gray-400 hover:text-gray-500" />
              <Github classes="ml-6 text-gray-400 hover:text-gray-500" />
            </Box>
            <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </Box>
        </Box>
      </Box>
    );
  }
}
