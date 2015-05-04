PKGNAME=colorpicker
FILES+=arrow.gif
FILES+=cross.gif
FILES+=hs.png
FILES+=nolongpress.js
FILES+=responsive.css
FILES+=hv.png
FILES+=icon128.png
FILES+=icon64.png
FILES+=index.html
FILES+=install.js
FILES+=jscolor.js
FILES+=Makefile
FILES+=manifest.webapp

SZ=$(shell wc -c ${PKGNAME}.zip |awk '{print $$1}')

all:
	rm -f ${PKGNAME}.zip
	zip ${PKGNAME}.zip ${FILES}
	echo Size=${SZ}
	sed -i -e 's/"size":.*/"size":'${SZ}',/g' manifest.webapp
