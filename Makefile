VERSION=$(shell git describe --tags)
NOMBRE="presentes-frontend"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m


comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE}${N} (versión: ${VERSION})"
	@echo ""
	@echo "  ${Y}Generales de la aplicación${N}"
	@echo ""
	@echo "    ${G}iniciar${N}               Instala todas las dependencias."
	@echo "    ${G}ejecutar${N}              Ejecuta la aplicación de forma local."
	@echo "    ${G}ejecutar_con_mirage${N}   Ejecuta la aplicación con datos de prueba."
	@echo "    ${G}test${N}                  Ejecuta los tests."
	@echo "    ${G}test_browser${N}          Ejecuta los tests y lanza una instancia del navegador."
	@echo "    ${G}version${N}               Incrementa la versión y ejecuta el deploy en circle.ci."
	@echo "    ${G}deploy${N}                Sube la aplicación compilada a producción."
	@echo ""
	@echo ""


iniciar:
	yarn install

test:
	yarn test

test_browser:
	yarn test --server

ejecutar:
	yarn start --port 4200

ejecutar_con_mirage:
	yarn start_mirage

deploy:
	rm -rf dist
	@API_URL="https://presentes-backend.enjambrelab.ar" yarn build --prod
	@touch dist/.static
	@echo "Compilando aplicación en modo producción"
	@cp Dockerfile dist/
	@cp config/nginx.conf dist/
	@rm -f dist/.buildpacks
	@cd dist && git init && git add . && git commit -m "Deploy"
	@cd dist && git remote add dokku dokku@157.230.229.207:presentes
	@cd dist && git push -f dokku main:main

version:
	yarn release
