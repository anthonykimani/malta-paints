import { SilkVinylInterior } from "@/constants/img";
import Image from "next/image";

const features = [
  {
    name: "Storage Advice",
    description:
      "This product is water based and must be protected from frost and extreme temperatures. We accept no responsibility for the deterioration of contents or pack aging after this date.",
  },
  {
    name: "Environmental & Disposal Advice",
    description:
      "Do not empty into drains or watercourses. Dispose of contents/container to waste disposal site in accordance with local/national regulations. containers may be recycled.",
  },
  {
    name: "Health & Safety Advice",
    description:
      "Keep out of reach of children. Ensure good ventilation during application and drying. Ensure paint does not get in eyes, on skin, or on clothing. Use the correct protective and safety wear. If medical advice is needed, have product container or label at hand. IF ON SKIN: Wash with plenty of soap and water. Do not use solvent thinners or White Spirit. Continue rinsing.",
  },
];

export default function DisplayProduct() {
  return (
    <div className="bg-white" id="paints">
      <section aria-labelledby="features-heading" className="relative">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-2 lg:w-1/2 p-4">
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
            WeatherGuard Plus Emulsion
            </p>
            <p className="mt-4 text-gray-500">
            Malta Vinyl Matt Emulsion Paint offers maximum protection on the interior and exterior surfaces. Suitable for new and previously painted plaster, cement, brick, stone and many other surfaces including soft board and hardboard ceilings and walls, asbestos sheets etc. Ease of application dries to a smooth, glossy finish.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:order-1 lg:w-1/2  aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none">
            <Image
              width={0}
              height={0}
              src={SilkVinylInterior}
              alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
              className="h-full w-full object-contain object-center lg:h-full lg:w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
