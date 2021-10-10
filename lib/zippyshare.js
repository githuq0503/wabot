function zippyshare(urls) {
    return new Promise((resolve, reject) => {
        axios.get(urls).then(({ data }) => {
            const $ = cheerio.load(data)
            const li = $.html()
            const po = $('#dlbutton').next().html()
            const le = po.split(';')[0]
            const lo = le.split("document.getElementById('dlbutton').href =")[1]
            const result = `${urls.split('/v')[0]}${eval(lo)}`
            const ho = $('#lrbox').text().replace(/\n/g, '')
			const hasil = {
                nama: ho.split('Name:')[1].split('Size:')[0].trim(),,
                ukuran: ho.split('Size:')[1].split('Uploaded:')[0].trim(),
                up_at: ho.split('Uploaded:')[1].split('          ')[0].trim(),
                link: result
            }
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}