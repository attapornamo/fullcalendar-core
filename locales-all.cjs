'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var locales_af = require('./locales/af.cjs');
var locales_arDz = require('./locales/ar-dz.cjs');
var locales_arKw = require('./locales/ar-kw.cjs');
var locales_arLy = require('./locales/ar-ly.cjs');
var locales_arMa = require('./locales/ar-ma.cjs');
var locales_arSa = require('./locales/ar-sa.cjs');
var locales_arTn = require('./locales/ar-tn.cjs');
var locales_ar = require('./locales/ar.cjs');
var locales_az = require('./locales/az.cjs');
var locales_bg = require('./locales/bg.cjs');
var locales_bn = require('./locales/bn.cjs');
var locales_bs = require('./locales/bs.cjs');
var locales_ca = require('./locales/ca.cjs');
var locales_cs = require('./locales/cs.cjs');
var locales_cy = require('./locales/cy.cjs');
var locales_da = require('./locales/da.cjs');
var locales_deAt = require('./locales/de-at.cjs');
var locales_de = require('./locales/de.cjs');
var locales_el = require('./locales/el.cjs');
var locales_enAu = require('./locales/en-au.cjs');
var locales_enGb = require('./locales/en-gb.cjs');
var locales_enNz = require('./locales/en-nz.cjs');
var locales_eo = require('./locales/eo.cjs');
var locales_esUs = require('./locales/es-us.cjs');
var locales_es = require('./locales/es.cjs');
var locales_et = require('./locales/et.cjs');
var locales_eu = require('./locales/eu.cjs');
var locales_fa = require('./locales/fa.cjs');
var locales_fi = require('./locales/fi.cjs');
var locales_frCa = require('./locales/fr-ca.cjs');
var locales_frCh = require('./locales/fr-ch.cjs');
var locales_fr = require('./locales/fr.cjs');
var locales_gl = require('./locales/gl.cjs');
var locales_he = require('./locales/he.cjs');
var locales_hi = require('./locales/hi.cjs');
var locales_hr = require('./locales/hr.cjs');
var locales_hu = require('./locales/hu.cjs');
var locales_hyAm = require('./locales/hy-am.cjs');
var locales_id = require('./locales/id.cjs');
var locales_is = require('./locales/is.cjs');
var locales_it = require('./locales/it.cjs');
var locales_ja = require('./locales/ja.cjs');
var locales_ka = require('./locales/ka.cjs');
var locales_kk = require('./locales/kk.cjs');
var locales_km = require('./locales/km.cjs');
var locales_ko = require('./locales/ko.cjs');
var locales_ku = require('./locales/ku.cjs');
var locales_lb = require('./locales/lb.cjs');
var locales_lt = require('./locales/lt.cjs');
var locales_lv = require('./locales/lv.cjs');
var locales_mk = require('./locales/mk.cjs');
var locales_ms = require('./locales/ms.cjs');
var locales_nb = require('./locales/nb.cjs');
var locales_ne = require('./locales/ne.cjs');
var locales_nl = require('./locales/nl.cjs');
var locales_nn = require('./locales/nn.cjs');
var locales_pl = require('./locales/pl.cjs');
var locales_ptBr = require('./locales/pt-br.cjs');
var locales_pt = require('./locales/pt.cjs');
var locales_ro = require('./locales/ro.cjs');
var locales_ru = require('./locales/ru.cjs');
var locales_siLk = require('./locales/si-lk.cjs');
var locales_sk = require('./locales/sk.cjs');
var locales_sl = require('./locales/sl.cjs');
var locales_sm = require('./locales/sm.cjs');
var locales_sq = require('./locales/sq.cjs');
var locales_srCyrl = require('./locales/sr-cyrl.cjs');
var locales_sr = require('./locales/sr.cjs');
var locales_sv = require('./locales/sv.cjs');
var locales_taIn = require('./locales/ta-in.cjs');
var locales_th = require('./locales/th.cjs');
var locales_tr = require('./locales/tr.cjs');
var locales_ug = require('./locales/ug.cjs');
var locales_uk = require('./locales/uk.cjs');
var locales_uzCy = require('./locales/uz-cy.cjs');
var locales_uz = require('./locales/uz.cjs');
var locales_vi = require('./locales/vi.cjs');
var locales_zhCn = require('./locales/zh-cn.cjs');
var locales_zhTw = require('./locales/zh-tw.cjs');

var localesAll = [
  locales_af['default'],
  locales_arDz['default'],
  locales_arKw['default'],
  locales_arLy['default'],
  locales_arMa['default'],
  locales_arSa['default'],
  locales_arTn['default'],
  locales_ar['default'],
  locales_az['default'],
  locales_bg['default'],
  locales_bn['default'],
  locales_bs['default'],
  locales_ca['default'],
  locales_cs['default'],
  locales_cy['default'],
  locales_da['default'],
  locales_deAt['default'],
  locales_de['default'],
  locales_el['default'],
  locales_enAu['default'],
  locales_enGb['default'],
  locales_enNz['default'],
  locales_eo['default'],
  locales_esUs['default'],
  locales_es['default'],
  locales_et['default'],
  locales_eu['default'],
  locales_fa['default'],
  locales_fi['default'],
  locales_frCa['default'],
  locales_frCh['default'],
  locales_fr['default'],
  locales_gl['default'],
  locales_he['default'],
  locales_hi['default'],
  locales_hr['default'],
  locales_hu['default'],
  locales_hyAm['default'],
  locales_id['default'],
  locales_is['default'],
  locales_it['default'],
  locales_ja['default'],
  locales_ka['default'],
  locales_kk['default'],
  locales_km['default'],
  locales_ko['default'],
  locales_ku['default'],
  locales_lb['default'],
  locales_lt['default'],
  locales_lv['default'],
  locales_mk['default'],
  locales_ms['default'],
  locales_nb['default'],
  locales_ne['default'],
  locales_nl['default'],
  locales_nn['default'],
  locales_pl['default'],
  locales_ptBr['default'],
  locales_pt['default'],
  locales_ro['default'],
  locales_ru['default'],
  locales_siLk['default'],
  locales_sk['default'],
  locales_sl['default'],
  locales_sm['default'],
  locales_sq['default'],
  locales_srCyrl['default'],
  locales_sr['default'],
  locales_sv['default'],
  locales_taIn['default'],
  locales_th['default'],
  locales_tr['default'],
  locales_ug['default'],
  locales_uk['default'],
  locales_uzCy['default'],
  locales_uz['default'],
  locales_vi['default'],
  locales_zhCn['default'],
  locales_zhTw['default'],
];

exports['default'] = localesAll;
