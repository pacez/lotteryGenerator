/**
 * author: pace_zhong@foxmail.com
 * desc: 应友要求，做了一个简单的双色球，大乐透随机生成器。
 * examples: node ./lottery.js
 */

const generator = (length,max = 35) => {
    const result = [];

    const fill = () => {
        let value = parseInt(Math.random() * max + 1, 10) || 1;

        if (result.length >= length) {
            return
        }

        if (!result.includes(value)) {
            result.push(value);
        }

        fill();
    };

    fill();

    return result
}

/**
 * @frontSize: 前区数量， 默认5 
 * @endSize: 后区数量， 默认 2
 * @frontMax: 前区最大数值，默认 35
 * @endMax: 后区最大数值，默认 12
 * @total: 注数，默认5
 */
const nums = (params={}) => {
    const {frontSize = 5, endSize = 2, frontMax=35,endMax=12,total=5} = params;
    let list = [];
    for(var i=0; i<total; i++) {
        const font = generator(frontSize,frontMax).sort((a,b) => a-b);
        const end = generator(endSize,endMax).sort((a, b) => a - b);
        list.push({
            '前':font,
            '后':end
        })
    }
    console.log(list)
}

const output = () => {
    console.log("=================== 大乐透 ======================")
    nums();
    console.log("=================== 双色球 ======================")
    nums({
    	frontSize:6, 
    	endSize:1, 
    	frontMax:33,
    	endMax:16
    });
}

output();
