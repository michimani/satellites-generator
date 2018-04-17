class SatellitesGenerator {
    /**
     * 環状に配置するオブジェクトの各座標を生成します
     * @param {number} number 環状に配置するオブジェクトの数
     * @param {number} radius 単位円の半径の長さ
     * @param {json} base 中心部分の座標 例: {x: 200, y:50}
     * @param {json} options オプション
     * @return {array}
     */
    generateCoordinate(number, radius, base, option = {}) {
        const coordinates = new Array();

        try {
            const per = 360 / number;
            let start = Math.PI/2;
            if (typeof(option.startPos) != 'undefined') {
                switch (option.startPos) {
                    case 'right': start = 0; break;
                    case 'left': start = Math.PI; break;
                    case 'bottom': start = Math.PI*3/4; break;
                }
            }

            let isReverse = false;
            if (typeof(option.isReverse) != 'undefined' && typeof(option.isReverse) == 'boolean' && option.isReverse == true) {
                isReverse = true;
            }

            for (let i = 0; i < number; i++) {
                let rad = 360 - (per * i);
                if (isReverse) {
                    rad = per * i;
                }
                coordinates.push({
                    x: base.x + radius * Math.cos(Math.PI*rad/180 + start),
                    y: base.y + -1 * radius * Math.sin(Math.PI*rad/180 + start)
                });
            }
        } catch (e) {
            console.error(e);
        } finally {
            return coordinates;
        }
    }
}