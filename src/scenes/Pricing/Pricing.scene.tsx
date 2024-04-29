import Suitecase from "~/assets/svg/suitecase.svg";
import Partner from "~/assets/svg/partner.svg";
import CustomerSupport from "~/assets/svg/customer-support.svg";

import { PricingTable } from "@/components/templates/PricingTable";
import { FAQs } from "@/components/templates/FAQs";

export default function Pricing() {
  return (
    <div>
      <PricingTable />

      <div className="px-6 lg:px-0">
        <div className="grid md:grid-cols-3 gap-20 md:gap-0 max-w-screen-lg mx-auto rounded-2xl py-10 border border-main/20 mb-24 ">
          <div>
            <Suitecase className="mx-auto w-16 mb-4" />
            <h2 className="text-lg font-semibold text-dark text-center">
              Sales and Business
            </h2>
            <p className="text-base text-grey text-center">contact@digi.com</p>
          </div>

          <div className="md:border-x md:border-main/20">
            <Partner className="mx-auto w-16 mb-4" />
            <h2 className="text-lg font-semibold text-dark text-center">
              Partners
            </h2>
            <p className="text-base text-grey text-center">
              partners@gmail.com
            </p>
          </div>

          <div>
            <CustomerSupport className="mx-auto w-16 mb-4" />
            <h2 className="text-lg font-semibold text-dark text-center">
              Customer Support
            </h2>
            <p className="text-base text-grey text-center">
              digisupport@gmail.com
            </p>
          </div>
        </div>
      </div>

      <FAQs />
    </div>
  );
}
