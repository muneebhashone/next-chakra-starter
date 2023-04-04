import Link from "next/link";
import {
  Link as ChakraLink,
  ComponentWithAs,
  LinkProps,
} from "@chakra-ui/react";

const NextLink = (props: ComponentWithAs<"a", LinkProps>) => {
  return <ChakraLink as={Link} {...props} />;
};

export default NextLink;
