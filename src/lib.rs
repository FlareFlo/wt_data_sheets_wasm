use std::panic;
use lazy_static::lazy_static;
use wasm_bindgen::JsValue;
use wasm_bindgen::prelude::*;

use wt_datamine_extractor_lib::bombs::bombs::Bomb;

use crate::util::{console_log, get_document, make_missile_option_inputs};
use wt_datamine_extractor_lib::missile::missile::Missile;
use crate::buildstamp::BuildStamp;


use wt_datamine_extractor_lib::thermal::thermals::Thermal;
pub mod table;
pub mod util;
pub mod live_calc;
pub mod comparison;
pub mod thermal_index;
pub mod shell_index;
pub mod buildstamp;
pub mod missile_ballistics;
pub mod bombing_table;
pub mod battle_rating_statistics;
pub mod fm;
pub mod utils;

pub const GAME_VER: &str = include_str!("../wt_datamine_extractor/meta_index/version.txt");
pub const BUILDSTAMP_RAW: &str = include_str!("../buildstamp.json");
pub const BATTLE_RATINGS_RAW: &str = include_str!("../wt_datamine_extractor/battle_rating/all.json");

lazy_static! {
    static ref BOMBS: Vec<Bomb> = {
		 serde_json::from_str::<Vec<Bomb>>(&include_str!("../wt_datamine_extractor/bombs/all.json")).unwrap()
    };
	 static ref THERMALS: Vec<Thermal> = {
		let json = include_str!("../wt_datamine_extractor/thermal_index/all.json");
		let mut thermals: Vec<Thermal> = serde_json::from_str(json).unwrap();
		thermals.sort_by_key(|d| d.name.clone());

		thermals
	};
	static ref MISSILES: Vec<Missile> = {
		let json = include_str!("../wt_datamine_extractor/missile_index/all.json");
		let mut missiles: Vec<Missile> = serde_json::from_str(json).unwrap();
		missiles.sort_by_key(|d| d.name.clone());

		missiles
	};
}

#[wasm_bindgen(start)]
#[allow(clippy::missing_errors_doc)]
pub fn main_js() -> Result<(), JsValue> {
	// This provides better error messages in debug mode.
	// It's disabled in release mode so it doesn't bloat up the file size.
	// #[cfg(debug_assertions)]
	panic::set_hook(Box::new(console_error_panic_hook::hook));
	make_footer_data();
	Ok(())
}

#[wasm_bindgen]
pub fn make_footer_data() {
	let document = get_document();
	if let Some(ver) = document.get_element_by_id("game_ver") {
		let buildstamp =  BuildStamp::from_const();

		ver.set_inner_html(&format!("{} {}", ver.inner_html(), GAME_VER));
		ver.set_inner_html(&format!("{} last updated on {}", ver.inner_html(), buildstamp.formatted));
		console_log(&format!("Game version set to {}, with timestamp {}", GAME_VER, buildstamp.date));
	} else {
		console_log(&format!("Cant display game version {}", GAME_VER));
	}
}