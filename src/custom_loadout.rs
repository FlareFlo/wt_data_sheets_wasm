use wasm_bindgen::prelude::*;
use web_sys::{Document, Element};
use wt_datamine_extractor_lib::custom_loadouts::custom_loadouts::{CustomLoadout, Pylon};
use crate::get_document;
use crate::LOADOUTS;

#[wasm_bindgen]
pub fn create_aircraft_dropdown() {
	let document: Document = get_document();

	let aircraft_select: Element = document.get_element_by_id("aircraft").unwrap();

	for (i, loadout) in LOADOUTS.iter().enumerate() {
		let option = document.create_element("option").unwrap();
		option.set_inner_html(loadout.localized);
		option.set_attribute("name", loadout.aircraft).unwrap();
		option.set_attribute("index", &i.to_string()).unwrap();
		aircraft_select.append_child(&option).unwrap();
	}
}

#[wasm_bindgen]
pub fn show_aircraft_loadout(index: usize) {
	let document: Document = get_document();
	static BASE_URL: &str = "https://raw.githubusercontent.com/gszabi99/War-Thunder-Datamine/master/atlases.vromfs.bin_u/gameuiskin/";


	let loadouts: Element = document.get_element_by_id("loadout_screen").unwrap();
	loadouts.set_inner_html("");

	let mut y_len = 0;

	for i in LOADOUTS[index].pylons {
		let len = i.weapons.len();
		if y_len < len {
			y_len = len;
		}
	}


	for (i, pylon) in LOADOUTS[index].pylons.iter().enumerate() {
		let tc = document.create_element("tr").unwrap();

		let index = document.create_element("td").unwrap();
		index.set_inner_html(&format!("pylon index: {i}"));
		tc.append_child(&index).unwrap();
		for j in 0..y_len {
			let td = document.create_element("td").unwrap();
			td.set_attribute("class", "weapon_container").unwrap();

			if let Some(weapon) = pylon.weapons.get(j as usize) {
				td.set_attribute("id", &format!("{i}_{j}")).unwrap();

				let img: Element = document.create_element("img").unwrap();
				img.set_attribute("src", &format!("{}{}.png",&BASE_URL, weapon.icon_type)).unwrap();
				img.set_attribute("class", "icon_type").unwrap();
				img.set_attribute("title",&format!("{}x {}\n Weight: {:.1}kg", weapon.count, weapon.localized, weapon.total_mass)).unwrap();
				td.append_child(&img).unwrap();


				// td.set_inner_html(&format!("{}x {}", weapon.count, weapon.localized));
			} else {
				let img: Element = document.create_element("img").unwrap();
				img.set_attribute("src", "/img/empty_loadout.png").unwrap();
				img.set_attribute("class", "icon_type").unwrap();
				img.set_attribute("title", "Empty slot").unwrap();
				td.append_child(&img).unwrap();
			}
			tc.append_child(&td).unwrap();
		}
		loadouts.append_child(&tc).unwrap();
	}
}