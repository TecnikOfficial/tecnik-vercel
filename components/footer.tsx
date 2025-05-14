import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      Made with{" "}
      <Link href="https://youtu.be/71qssscQqH8?feature=shared" target="_blank">
        <Image
          src="/images/heart.gif"
          alt="Heart"
          title="Listen💓"
          width={20}
          height={20}
          style={{ verticalAlign: "bottom", marginLeft: "5px", marginRight: "5px" }}
          unoptimized
        />
      </Link>{" "}
      using A.i | Source Code{" "}
      <Link href="https://github.com/TecnikOfficial/TecnikOfficial.github.io" target="_blank">
        <FaGithub color="white" size={20} style={{ verticalAlign: "bottom", marginLeft: "5px" }} />
      </Link>
    </footer>
  )
}
