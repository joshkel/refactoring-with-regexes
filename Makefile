img/pacman-fsm.svg: img/pacman-fsm.gv
	dot -Tsvg $< -o $@
