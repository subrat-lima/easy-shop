
const selectors = [
	/* product page */
	/* ads */
	"#percolate-ui-ilm_div",
	"#amsDetailRight_feature_div",
	"#gridgetWrapper",
	"#similarities_feature_div",
	"#HLCXComparisonWidget_after_ask-dp-search-override_of_btf_arenas-3-T2",
	"#sims-themis-sponsored-products-2_feature_div",
	"#discovery-and-inspiration_feature_div",
	"#dp-ads-center-promo_feature_div",
	"#cr-ADPlaceholder",
	"#sponsored-products-logger_feature_div",
	"#ad-endcap-1_feature_div",
	"#rhf",
	"#dp-ads-center-promo-dramabot_feature_div",
	"[cel_widget_id='percolate-ui-ilm_csm_instrumentation_wrapper']",

	/* rates */
	"#dealBadge_feature_div",
	"#inemi_feature_div",
	"#inEMI_feature_div",
	"#b2bUpsell_feature_div",
	"#corePriceDisplay_desktop_feature_div > .a-spacing-small",
	"#corePriceDisplay_mobile_feature_div > .a-spacing-small",
	"#corePriceDisplay_desktop_feature_div > .a-spacing-none > .savingsPercentage",
	"#corePriceDisplay_mobile_feature_div > .a-spacing-none > .savingsPercentage",
	"#buyItOnAB_feature_div",
	"#amsDetailRight_feature_div",
	"#percolate-ui-ilm_div",

	"#booksAdditionalPriceInfoContainer",
	"#amsDetailRightPBook_feature_div",
	"#HLCXComparisonWidget-Placement-A_feature_div",
	"#HLCXComparisonWidget_feature_div",
	"#regular_savings_sticker",
	"#tp_price_update_feature_in",
	".inline-show-experience",
	"#apex_price > .centralizedApexBasisPriceCSS",
	"#sponsoredProducts_pBooks_IN_feature_div",
	"[data-cel-widget^='relatedPoductZone']",

	"#corePrice_desktop table.a-lineitem > tbody > tr:nth-child(4)",
	"#corePrice_desktop table.a-lineitem > tbody > tr:nth-child(3)",
	"#corePrice_desktop table.a-lineitem > tbody > tr:nth-child(1)",
	"#corePrice_mobile table.a-lineitem > tbody > tr:nth-child(4)",
	"#corePrice_mobile table.a-lineitem > tbody > tr:nth-child(3)",
	"#corePrice_mobile table.a-lineitem > tbody > tr:nth-child(1)",

	/* search page */
	/* ads */
	".AdHolder",
	".s-left-ads-item",
	".s-widget-spacing-large",
	"[data-cel-widget^='MAIN-VIDEO_SINGLE_PRODUCT']",
	"[cel-widget-id^='MAIN-VISUAL_NAVIGATION-']",
	"[cel-widget-id^='MAIN-FEATURE_CARD-']",
	".amzn-safe-frame-container",
	"#heroQuickPromo_feature_div",

	".acsProductBlockV2__price--strikethrough",
	".acsProductBlockV1__price--strikethrough",
	".acsProductBlockV2__price > .a-size-mini",
	"._carousel-v2_style_badge__XJCp6",
	".octopus-pc-asin-strike-price",
	".s-price-instructions-style > .a-row > .a-row > .a-link-normal > .a-section.aok-inline-block",
	".s-price-instructions-style > .a-row > .a-row > .a-letter-space + span",
	".s-price-instructions-style > .a-row > .a-row > .a-letter-space",
	".s-price-instructions-style > .a-row > .a-row > .a-section.aok-inline-block",
	".puis-price-instructions-style > .a-row > .a-row > .a-link-normal > .a-section.aok-inline-block",
	".puis-price-instructions-style > .a-row > .a-row > .a-letter-space + span",
	".puis-price-instructions-style > .a-row > .a-row > .a-letter-space",
	"[data-cy='price-recipe'] .a-letter-space + span",
	"[data-cy='price-recipe'] .a-letter-space",
	"[data-cy='price-recipe'] .aok-inline-block", /* experimental */
];



let selector_array = [];
selectors.forEach(selector => {
	let elems = Array.from(document.querySelectorAll(selector));
	elems.forEach(elem => {
		elem.remove();
	});
});

