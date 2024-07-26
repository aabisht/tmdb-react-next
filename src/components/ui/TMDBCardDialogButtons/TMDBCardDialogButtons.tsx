import { memo } from "react";
import { TMDBButton, TMDBIcon } from "..";

export const TMDBCardDialogButtons = memo(() => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex justify-start items-start">
        <TMDBButton className="mr-2 leading-none" tabIndex={-1}>
          <TMDBIcon isOutline={false} iconsName="play_arrow" />
        </TMDBButton>
        <TMDBButton className="mr-2 leading-none" tabIndex={-1}>
          <TMDBIcon isOutline={false} iconsName="add" />
        </TMDBButton>
        <TMDBButton className="mr-2 leading-none" tabIndex={-1}>
          <TMDBIcon isOutline={true} iconsName="thumb_up" />
        </TMDBButton>
      </div>
      <div>
        <TMDBButton className="leading-none" tabIndex={-1}>
          <TMDBIcon isOutline={true} iconsName="keyboard_arrow_down" />
        </TMDBButton>
      </div>
    </div>
  );
});

TMDBCardDialogButtons.displayName = "TMDBCardDialogButtons";
