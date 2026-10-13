"use client";

import { KundliReport } from "@/lib/astrology-engine";

export function VedicChartDisplay({ kundli }: { kundli: KundliReport }) {
  // Houses 1 to 12 in the traditional North-Indian chart diamond layout
  // House 1 is top center diamond
  // House 2 is top-left triangle
  // House 3 is left-top triangle
  // House 4 is left center diamond
  // House 5 is left-bottom triangle
  // House 6 is bottom-left triangle
  // House 7 is bottom center diamond
  // House 8 is bottom-right triangle
  // House 9 is right-bottom triangle
  // House 10 is right center diamond
  // House 11 is right-top triangle
  // House 12 is top-right triangle

  const getHouseData = (houseNum: number) => {
    return kundli.houses.find((h) => h.house === houseNum) || {
      house: houseNum,
      sign: "",
      lord: "",
      planets: [],
    };
  };

  const getPlanetAbbreviations = (planets: string[]) => {
    const map: Record<string, string> = {
      Sun: "Su",
      Moon: "Mo",
      Mars: "Ma",
      Mercury: "Me",
      Jupiter: "Ju",
      Venus: "Ve",
      Saturn: "Sa",
      Rahu: "Ra",
      Ketu: "Ke",
    };
    return planets.map((p) => map[p] || p).join(" ");
  };

  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto rounded-3xl p-3 bg-gradient-to-tr from-wine-950 via-celestial-950 to-celestial-900 border-2 border-gold-400/40 shadow-2xl shadow-black/80 select-none">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full filter drop-shadow-[0_0_8px_rgba(244,200,102,0.2)]"
      >
        {/* Outer Square */}
        <rect
          x="10"
          y="10"
          width="380"
          height="380"
          fill="rgba(12, 4, 24, 0.95)"
          stroke="#f4c866"
          strokeWidth="2.5"
        />

        {/* Diagonal X Lines */}
        <line x1="10" y1="10" x2="390" y2="390" stroke="#f4c866" strokeWidth="1.8" />
        <line x1="10" y1="390" x2="390" y2="10" stroke="#f4c866" strokeWidth="1.8" />

        {/* Central Diamond Lines (connecting midpoints) */}
        <line x1="200" y1="10" x2="10" y2="200" stroke="#f4c866" strokeWidth="1.8" />
        <line x1="10" y1="200" x2="200" y2="390" stroke="#f4c866" strokeWidth="1.8" />
        <line x1="200" y1="390" x2="390" y2="200" stroke="#f4c866" strokeWidth="1.8" />
        <line x1="390" y1="200" x2="200" y2="10" stroke="#f4c866" strokeWidth="1.8" />

        {/* House 1: Top Diamond (Lagna) */}
        <g>
          <text x="200" y="75" textAnchor="middle" fill="#f4c866" fontSize="13" fontWeight="bold">
            1 (Lagna)
          </text>
          <text x="200" y="98" textAnchor="middle" fill="#ffe9d5" fontSize="11" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(1).planets)}
          </text>
          <text x="200" y="115" textAnchor="middle" fill="#d4af37" fontSize="9">
            {getHouseData(1).sign.split(" ")[0]}
          </text>
        </g>

        {/* House 2: Top Left Triangle */}
        <g>
          <text x="110" y="45" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            2
          </text>
          <text x="110" y="65" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(2).planets)}
          </text>
        </g>

        {/* House 3: Left Top Triangle */}
        <g>
          <text x="45" y="110" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            3
          </text>
          <text x="45" y="130" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(3).planets)}
          </text>
        </g>

        {/* House 4: Left Diamond (Sukha Bhava) */}
        <g>
          <text x="75" y="200" textAnchor="middle" fill="#f4c866" fontSize="13" fontWeight="bold">
            4
          </text>
          <text x="95" y="200" textAnchor="middle" fill="#ffe9d5" fontSize="11" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(4).planets)}
          </text>
        </g>

        {/* House 5: Left Bottom Triangle */}
        <g>
          <text x="45" y="290" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            5
          </text>
          <text x="45" y="310" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(5).planets)}
          </text>
        </g>

        {/* House 6: Bottom Left Triangle */}
        <g>
          <text x="110" y="355" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            6
          </text>
          <text x="110" y="372" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(6).planets)}
          </text>
        </g>

        {/* House 7: Bottom Diamond (Kalatra Bhava) */}
        <g>
          <text x="200" y="325" textAnchor="middle" fill="#f4c866" fontSize="13" fontWeight="bold">
            7
          </text>
          <text x="200" y="348" textAnchor="middle" fill="#ffe9d5" fontSize="11" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(7).planets)}
          </text>
        </g>

        {/* House 8: Bottom Right Triangle */}
        <g>
          <text x="290" y="355" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            8
          </text>
          <text x="290" y="372" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(8).planets)}
          </text>
        </g>

        {/* House 9: Right Bottom Triangle */}
        <g>
          <text x="355" y="290" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            9
          </text>
          <text x="355" y="310" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(9).planets)}
          </text>
        </g>

        {/* House 10: Right Diamond (Karma Bhava) */}
        <g>
          <text x="325" y="200" textAnchor="middle" fill="#f4c866" fontSize="13" fontWeight="bold">
            10
          </text>
          <text x="305" y="200" textAnchor="middle" fill="#ffe9d5" fontSize="11" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(10).planets)}
          </text>
        </g>

        {/* House 11: Right Top Triangle */}
        <g>
          <text x="355" y="110" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            11
          </text>
          <text x="355" y="130" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(11).planets)}
          </text>
        </g>

        {/* House 12: Top Right Triangle */}
        <g>
          <text x="290" y="45" textAnchor="middle" fill="#f4c866" fontSize="11" fontWeight="bold">
            12
          </text>
          <text x="290" y="65" textAnchor="middle" fill="#ffe9d5" fontSize="10" fontWeight="bold">
            {getPlanetAbbreviations(getHouseData(12).planets)}
          </text>
        </g>
      </svg>

      <div className="text-center mt-2 text-[10px] text-gold-300/70 font-serif">
        Vedic Janma Kundli (Lagna Chart) • Lagna: {kundli.lagnaSign.split(" ")[0]}
      </div>
    </div>
  );
}
