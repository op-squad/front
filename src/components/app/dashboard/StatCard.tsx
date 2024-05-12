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
import CountUp from "react-countup";

export default function StatCard({ card, style, icon }: cardStatProps) {
  return (
    <CountUp
      start={0}
      end={card.value}
      duration={2.75}
    >
      {({ countUpRef }) => (
        <div
          className={`flex items-center ${style.cardColor} ${style.textColor} h-28 2xl:h-40 gap-4 2xl:gap-6 basis-1/3 rounded-xl px-6 2xl:px-11`}
        >
          <div
            className={`flex p-3 rounded-full aspect-square h-2/5 ${style.circleColor}`}
          >
            <img
              src={icon.src}
              alt={icon.alt}
            />
          </div>
          <div className="flex flex-col gap-0.5 w-content">
            <p className="font-extrabold text-xs 2xl:text-base">
              {card.cardName}
            </p>
            <p className="font-bold text-2xl 2xl:text-3xl">
              <span ref={countUpRef} />
            </p>
          </div>
        </div>
      )}
    </CountUp>
  );
}
