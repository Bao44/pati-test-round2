import React from "react";
import { AccordionItem } from "./TabProductFooter";
import { INGREDIENTS } from "@/lib/data";

export default function ProductFooter() {
  return (
    <div className="py-4">
      {/* Image */}
      <div className="space-y-3">
        <img
          width={588}
          height={32}
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654"
          alt=""
        />
        <img
          width={588}
          height={181}
          src="https://trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486"
          alt=""
        />
        <div className="flex space-x-2">
          <img
            width={28}
            height={28}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
            alt=""
          />
          <span>60-Day Money-Back Guarantee</span>
        </div>
        <div className="flex space-x-2">
          <img
            width={28}
            height={28}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"
            alt=""
          />
          <span>Free Shipping From USA Included</span>
        </div>
      </div>

      {/* Feedback */}
      <div className="w-full mt-5 bg-bg-cream rounded-xl p-3">
        <div className="flex space-x-3 items-center justify-start">
          {/* Avatar */}
          <img
            width={68}
            height={68}
            className="max-sm:w-10.5 max-sm:h-10.5"
            src="https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
            alt=""
          />
          <div>
            <div className="flex space-x-3 space-y-1 items-start">
              <span>Margaret Ellison | FL</span>
              <img
                width={120}
                height={20}
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
                alt=""
              />
            </div>
            <img
              width={100}
              height={18}
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267"
              alt=""
            />
          </div>
        </div>

        {/* text */}
        <div>
          <p className="pt-3 pb-2 font-semibold">
            Even my husband noticed... the spark came back.
          </p>
          <p className="text-[16px] text-black leading-5">
            After years of hiding under coverups, picking apart my body, and
            feeling disconnected, I finally feel at ease again. I feel less
            bloated, lighter, like my body is working with me not against me.
            These past months, I’ve been present. Even my marriage feels
            renewed, not just in how I look but in how I feel. It’s hard to
            explain, but once you try it you’ll get it. I’d recommend this to my
            closest friends without question.
          </p>
        </div>
      </div>

      {/* Tab */}
      <div>
        <div className="w-full space-y-3 mt-6">
          <AccordionItem title="Ingredients proven by science">
            <div className="space-y-4">
              <p className="font-extrabold text-gray-900 text-[15px]">
                Sculptique Ingredients:
              </p>
              <ul className="list-disc pl-11 marker:text-gray-700 text-[18px]">
                {INGREDIENTS.map((item, index) => (
                  <li key={index}>
                    <span className="font-extrabold text-gray-800 text-[16px]">
                      {item.name}
                    </span>{" "}
                    – {item.desc}
                  </li>
                ))}
              </ul>
              <p className="text-md text-black font-medium">
                These natural ingredients work together to reduce puffiness,
                bloating, fluid retention.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="How does it actually work?">
            <p className="text-black leading-snug">
              Sculptique works by improving blood flow and supporting lymphatic
              drainage to reduce fluid buildup that causes puffiness,
              inflammation, and water retention. It also reduces inflammation
              and boosts collagen production to help skin become firmer and
              smoother.
            </p>
          </AccordionItem>

          <AccordionItem title="Shipping and returns">
            <div className="space-y-4 text-black leading-snug">
              <p>
                All of Sculptique orders get FREE shipping straight from our USA
                warehouse. Orders are usually shipped out within 1-2 working
                days, and you should receive the order within 3-7 working days
                for domestic USA orders, and within 10 working days for
                International orders.
              </p>
              <p>
                We also offer a 60-day money back guarantee - if you are
                unsatisfied with our product, you can take advantage of our
                guarantee and ship back the product to us to get your return
                within 60 days of receiving your order.
              </p>
            </div>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}
