import { Card } from "@/components/ui/card";

interface BeverageCardProps {
  beverage: {
    name: string;
    teaser: string;
    description: string;
  };
  beverageKey: string;
  image: any;
  background?: string;
  borderColor: string;
  textColor: string;
  hoverTextColor: string;
  teaserColor: string;
  hoverOverlayFrom: string;
  hoverOverlayTo: string;
  additionalClasses?: string;
  // Factor de escala para agrandar/encoger la imagen desde el padre
  imageScale?: number;
  onClick: () => void;
}

export const BeverageCard = ({
  beverage,
  beverageKey,
  image,
  background,
  borderColor,
  textColor,
  hoverTextColor,
  teaserColor,
  hoverOverlayFrom,
  hoverOverlayTo,
  additionalClasses = "",
  imageScale = 1,
  onClick
}: BeverageCardProps) => (
  <Card
    className={`group cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-0.5 transform-gpu will-change-transform ${borderColor} overflow-hidden relative backdrop-blur-sm ${additionalClasses}`}
    style={{
      background,
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
    }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label={`${beverage.name} - ${beverage.description}`}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${hoverOverlayFrom} ${hoverOverlayTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

    <div className="p-8 sm:p-10 text-center relative z-10">
      <div className="">
        <img
          src={image?.src}
          alt={beverageKey}
          className="w-full h-full object-contain transition-transform duration-500"
          style={{ transform: `scale(${imageScale})` }}
        />
      </div>

      <h3 className={`text-2xl sm:text-3xl font-bold ${textColor} mb-6 ${hoverTextColor} transition-colors`}>
        {beverage.name}
      </h3>

      <div className=" mb-6 overflow-hidden">
        <div className={`sm:opacity-0 sm:group-hover:opacity-100 text-sm ${teaserColor} italic transition-all duration-500 transform sm:translate-y-3 sm:group-hover:translate-y-0`}>
          {beverage.teaser}
        </div>
      </div>
    </div>
  </Card>
);