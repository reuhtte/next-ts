import { Equipment } from "@/app/lib/definitions";

export default function Card({ item }: { item: Equipment }) {
  return (
    <div className="bg-[#19211D] border-[#536457] border rounded-lg p-5 text-white flex flex-row gap-2">
      <div className="bg-[#536457] border-2 border-[#536457] rounded-lg p-2 mr-4 min-w-64 items-center flex justify-center">
        Some picture
      </div>
      <div className="border-1 border-[#536457]"></div>
      <div className="flex flex-col gap-1 ml-4">
        <h2 className="font-semibold text-xl">{item.name}</h2>
        <div>
          <span className="text-sm rounded-lg bg-[#304B34] pl-3 pr-3 pt-1 pb-1 font-medium">
            {item.category}
          </span>
        </div>
        <p>
          Vitality <span className="font-bold">+{item.vitality}</span>
        </p>
        <p>
          Strength <span className="font-bold">+{item.strength}</span>
        </p>
        <p>
          Magic <span className="font-bold">+{item.magic}</span>
        </p>
      </div>
    </div>
  );
}
