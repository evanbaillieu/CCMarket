# README.md

# setup :

---

pour lancer installation des differant module que se soit yarn ou composer

### instalation :

```bash
# sela va est install module pour symfony et les module pour react 
yarn run all-install
# sela va installer les node_modules 
yarn install
# sela va installer les dependence de vendor
composer install
```

### remove module

```bash
# sela va permetre la supression de module vendor est node_module
yarn run remove-mod
# sela va supprimer que les node_modules
yarn run remove-nodemod
# sela va supprimer que les module vendor
yarn run remove-vendormod
# sela va supprimer le cache
yarn run remove-cache
# sela va supprimer le cache, les node_module, vendor
yarn run remove-all
```

### run le project

```bash
# sela va lancer le serveur webpack et le serveur symfony et lancer vscode
yarn run start-code
# la meme chose que audesus pour phpstorm
yarn run start-PS
# pour just lancer les deux serveur
yarn run start
# pour lancer le serveur webpack en dev
yarn run encore dev --watch
# pour lancer le serveur symfony
symfony server:start
```