type cardInfo = {
  cardName: string;
  value: number;
};

type styleInfo = {
  cardColor: string;
  textColor: string;
  circleColor: string;
};

type iconInfo = {
  src: string;
  alt: string;
};

type cardStatProps = {
  card: cardInfo;
  style: styleInfo;
  icon: iconInfo;
};

export default function StatCard({ card, style, icon }: cardStatProps) {
  return (
    <div
      className={`flex items-center ${style.cardColor} ${style.textColor} h-40 gap-6 basis-1/3 rounded-xl px-11`}
    >
      <div className={`flex p-3 rounded-full w-16 h-16 ${style.circleColor}`}>
        <img
          src={icon.src}
          alt={icon.alt}
        />
      </div>
      <div className="flex flex-col gap-2.5 w-content">
        <p className="font-extrabold text-base">{card.cardName}</p>
        <p className="font-bold text-3xl">{card.value}</p>
      </div>
    </div>
  );
}
