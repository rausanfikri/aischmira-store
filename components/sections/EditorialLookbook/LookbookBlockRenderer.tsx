"use client";

import * as React from "react";
import type { LookbookBlock } from "@/domain/lookbook/entity";
import { LookbookCampaignBanner } from "./LookbookCampaignBanner";
import { LookbookSplitLayout } from "./LookbookSplitLayout";
import { LookbookQuoteBlock } from "./LookbookQuoteBlock";
import { LookbookImagePair } from "./LookbookImagePair";
import { LookbookImageGallery } from "./LookbookImageGallery";
import { LookbookEditorialText } from "./LookbookEditorialText";

interface LookbookBlockRendererProps {
  block: LookbookBlock;
  index: number;
}

export function LookbookBlockRenderer({ block, index }: LookbookBlockRendererProps) {
  switch (block.type) {
    case "CAMPAIGN_BANNER":
    case "FULL_WIDTH_IMAGE":
      return <LookbookCampaignBanner block={block} index={index} />;

    case "SPLIT_LAYOUT":
      return <LookbookSplitLayout block={block} index={index} />;

    case "QUOTE_BLOCK":
      return <LookbookQuoteBlock block={block} index={index} />;

    case "IMAGE_PAIR":
      return <LookbookImagePair block={block} index={index} />;

    case "IMAGE_GALLERY":
      return <LookbookImageGallery block={block} index={index} />;

    case "EDITORIAL_TEXT":
    default:
      return <LookbookEditorialText block={block} index={index} />;
  }
}
