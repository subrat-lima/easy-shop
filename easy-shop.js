const hide_element = function(doc, selector) {
	let elem = doc.querySelector(selector);
	if (elem) {
		elem.style.display = "none";
	}
}

const debloat_product_page = function() {
	/* deal badge */
	let dealbadge_feature_selector = "#dealBadge_feature_div";

	/* emi information */
	let inemi_feature_selector = "#inemi_feature_div";

	/* b2b upsell */
	let b2bupsell_feature_selector = "#b2bUpsell_feature_div";

	/* mrp */
	let mrp_desktop_feature_selector = "#corePriceDisplay_desktop_feature_div > .a-spacing-small";
	let mrp_android_feature_selector = "#corePriceDisplay_mobile_feature_div > .a-spacing-small";

	/* discount */
	let discount_desktop_feature_selector = "#corePriceDisplay_desktop_feature_div > .a-spacing-none > .savingsPercentage";
	let discount_android_feature_selector = "#corePriceDisplay_mobile_feature_div > .a-spacing-none > .savingsPercentage";
	
	hide_elem(document, dealbadge_feature_selector);
	hide_elem(document, inemi_feature_selector);
	hide_elem(document, b2bupsell_feature_selector);
	hide_elem(document, mrp_desktop_feature_selector);
	hide_elem(document, mrp_android_feature_selector);
	hide_elem(document, discount_desktop_feature_selector);
	hide_elem(document, discount_android_feature_selector);
};

debloat_product_page();
