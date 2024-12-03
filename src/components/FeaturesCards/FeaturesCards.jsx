import audienceSegmentationIcon from "../../assets/images/audienceSegmentation.svg";

const FeaturesCards = () => {
  return (
    <div className="border-inverseSecondary px-7 flex flex-col items-start justify-center py-5 font-medium bg-white border rounded-lg">
      <div className="size-10 bg-inversePrimary flex items-center justify-center mb-4 rounded-lg">
        <img src={audienceSegmentationIcon} alt="Audience segmentation" />
      </div>

      <div>
        <h3 className="mb-2 text-base font-bold">Audience Segmentation</h3>
        <p className="text-customBaseTertiary text-sm">
          Effortlessly group your audience based on behavior, demographics, and
          preferences to target them with precision.
        </p>
      </div>
    </div>
  );
};

export default FeaturesCards;
