import { GetPay } from "../src/components/GetPay";
import { Init } from "../src/components/Init";
import { Navbar } from "../src/components/Navbar";
import { Services } from "../src/components/Service";
import { TelephoneVideo } from "../src/components/TelephoneVideo";
import { YourMoney } from "../src/components/YourMoney";

export default function Home() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <Navbar />
      <section>
        <Init/>
      </section>
      <section>
        <TelephoneVideo />
      </section>
      <section>
        <YourMoney />
      </section>
      <section>
        <GetPay />
      </section>
      <section>
        <Services />
      </section>
    </>
  );
}
