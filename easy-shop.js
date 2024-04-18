const hide_element = function(doc, selector) {
	let elem = doc.querySelector(selector);
	if (elem) {
		elem.style.display = "none";
	}
}

const debloat_product_page = function() {
	/* deal badge */
	let deal_badge_div = document.getElementById("dealBadge_feature_div");
	if (deal_badge_div) {
		deal_badge_div.style.display = "none";
	}

	/* emi information */
	let emi_feature_div = document.getElementById("inemi_feature_div");
	if (emi_feature_div) {
		emi_feature_div.style.display = "none";
	}

	/* b2b upsell */
	let b2b_upsell_div = document.getElementById("b2bUpsell_feature_div");
	if (b2b_upsell_div) {
		b2b_upsell_div.style.display = "none";
	}

	/* mrp */
	// let price_div = document.getElementById("corePriceDisplay_desktop_feature_div");
	let mrp_div_desktop = document.querySelector("#corePriceDisplay_desktop_feature_div > .a-spacing-small");
	let mrp_div_android = document.querySelector("#corePriceDisplay_mobile_feature_div > .a-spacing-small");
	if (mrp_div_desktop) {
		mrp_div_desktop.style.display = "none";
	}
	if (mrp_div_android) {
		mrp_div_android.style.display = "none";
	}


	/* discount */
	let discount_div_desktop = document.querySelector("#corePriceDisplay_desktop_feature_div > .a-spacing-none > .savingsPercentage");
	let discount_div_android = document.querySelector("#corePriceDisplay_mobile_feature_div > .a-spacing-none > .savingsPercentage");
	if (discount_div_desktop) {
		discount_div_desktop.style.display = "none";
	}
	if (discount_div_android) {
		discount_div_android.style.display = "none";
	}
};

debloat_product_page();
